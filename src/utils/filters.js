import util from './utils'

const STATUS = require('../constants/status').STATUS
const TYPE = require('../constants/type').TYPE

// import pinyin from 'pinyin/lib/web-pinyin'

export default {
    prettyDate(time) {
        // var date = new Date(time),
        let diff = (((new Date()).getTime() - time) / 1000),
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) {
            return '';
        } else if (day_diff >= 31) {
            return util.formatDate(new Date(time));
        }


        return day_diff === 0 && (
            diff < 60 && "刚刚" ||
            diff < 120 && "1分钟前" ||
            diff < 3600 && Math.floor(diff / 60) + "分钟前" ||
            diff < 7200 && "1个小时前" ||
            diff < 86400 && Math.floor(diff / 3600) + "小时前") ||
            day_diff === 1 && "昨天" ||
            day_diff < 7 && day_diff + "天前" ||
            day_diff < 31 && Math.ceil(day_diff / 7) + "周前";
    },
    date(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
        date = new Date(date)
        if (!date || date == 'Invalid Date') {
            return ''
        }
        return util.formatDate(date, fmt);
    },
    agencyStatus(status) {
        let text = '';
        switch (status) {
            case STATUS.AGENCY_STATUS.AUDITING:
                text = '待审核'
                break;
            case STATUS.AGENCY_STATUS.REJECTED:
                text = '驳回'
                break;
            case STATUS.AGENCY_STATUS.APPROVED:
                text = '审核通过'
                break;
            case STATUS.AGENCY_STATUS.PAID:
                text = '审核通过'
                break;
            case STATUS.AGENCY_STATUS.STOPPED:
                text = '停用'
                break;
            default:
                break;
        }
        return text;
    },
    withdrawStatus(status) {
        let text = '';
        switch (status) {
            case STATUS.WITHDRAW_STATUS.WAIT_APPROVE:
                text = '待审核'
                break;
            case STATUS.WITHDRAW_STATUS.APPROVED:
                text = '审核通过'
                break;
            case STATUS.WITHDRAW_STATUS.REJECT:
                text = '被驳回'
                break;
            default:
                break;
        }
        return text;
    },
    postStatus(status) {
        let text = '';
        switch (status) {
            case STATUS.MATERIAL_POST_STATUS.WAIT_POST:
                text = '未邮寄'
                break;
            case STATUS.MATERIAL_POST_STATUS.POSTED:
                text = '已邮寄'
                break;
            default:
                break;
        }
        return text;
    },
    traineeStatus(status) {
        let text = '';
        switch (status) {
            case STATUS.TRAINEE_STATUS.NOT_ENTER:
                text = '未入学'
                break;
            case STATUS.TRAINEE_STATUS.ENTER:
                text = '已入学'
                break;
            case STATUS.TRAINEE_STATUS.INVALID:
                text = '无效'
                break;
            default:
                break;
        }
        return text;
    },
    detailAddress(address) {
        let province = address.province || '',
            city = address.city || '',
            district = address.district || '',
            detailAddress = address.address || '';
        return province + city + district + detailAddress;
    },
    percentPrice(totalPrice, percent) {
        totalPrice = totalPrice || 0
        percent = percent || 0
        return Number((totalPrice * percent / 100).toFixed(2));
    },
    auditingStatus(status) {
        let text = '';
        switch (status) {
            case STATUS.APPLY_STATUS.AUDITING:
                text = '审核中'
                break;
            case STATUS.APPLY_STATUS.NOT_APPLY:
                text = '待审核'
                break;
            case STATUS.APPLY_STATUS.APPROVED:
                text = '通过'
                break;
            case STATUS.APPLY_STATUS.FAILED:
                text = '拒绝'
            default:
                break;
        }
        return text;
    },
    fondsFormat(number) {
        if (!number)
            return 0
        if (typeof number === 'number')
            number = number.toString()
        //将其数字反转
        number = number.split("").reverse().join("");
        //存取反正后分割数据
        var numberSB = "";
        var leng = number.length;
        leng = (leng % 3 === 0 ? leng / 3 : (leng / 3) + 1);
        for (var i = 0; i < leng; i++) {
            numberSB += ",";
            if (i + 1 < leng)
                numberSB += number.substring(i * 3, (i + 1) * 3);
            if (i + 1 === leng)
                numberSB += number.substring(i * 3);
        }
        var resultNumber = numberSB.substring(0, numberSB.length - 1)
        resultNumber = resultNumber.split("").reverse().join("");
        resultNumber = resultNumber.substring(0, resultNumber.length - 1);
        // resultNumber += "." + lastNumber;
        return resultNumber
    },
    keywords(data) {
        let sb = [];
        for (let x in data) {
            sb.push(data[x].name)
        }
        let re = sb.join(" ")
        if (re.length > 40)
            re = re.substring(0, 40) + "...";
        return re
    },
    content(data) {
        let element = [];
        let content = [];
        for (let x in data) {
            element.push(data[x].name);
            element.push(data[x].value);
            content.push(element.join(": "));
            element = [];
        }
        let re = content.join("; ");
        if (re.length > 50)
            re = re.substring(0, 50) + "...";
        return re;
    }
}

