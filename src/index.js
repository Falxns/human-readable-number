module.exports = function toReadable(number) {
    let res = "";
    let arr = number.toString().split("");

    if (number > 99) {
        switch (arr[0]) {
            case "1":
                res += "one";
                break;
            case "2":
                res += "two";
                break;
            case "3":
                res += "three";
                break;
            case "4":
                res += "four";
                break;
            case "5":
                res += "five";
                break;
            case "6":
                res += "six";
                break;
            case "7":
                res += "seven";
                break;
            case "8":
                res += "eight";
                break;
            case "9":
                res += "nine";
                break;
        }
        res += " hundred";
        let dec = parseInt("".concat(arr[1], arr[2]));
        if (dec < 20) {
            switch (dec) {
                case 1:
                    res += " one";
                    break;
                case 2:
                    res += " two";
                    break;
                case 3:
                    res += " three";
                    break;
                case 4:
                    res += " four";
                    break;
                case 5:
                    res += " five";
                    break;
                case 6:
                    res += " six";
                    break;
                case 7:
                    res += " seven";
                    break;
                case 8:
                    res += " eight";
                    break;
                case 9:
                    res += " nine";
                    break;
                case 10:
                    res += " ten";
                    break;
                case 11:
                    res += " eleven";
                    break;
                case 12:
                    res += " twelve";
                    break;
                case 13:
                    res += " thirteen";
                    break;
                case 14:
                    res += " fourteen";
                    break;
                case 15:
                    res += " fifteen";
                    break;
                case 16:
                    res += " sixteen";
                    break;
                case 17:
                    res += " seventeen";
                    break;
                case 18:
                    res += " eighteen";
                    break;
                case 19:
                    res += " nineteen";
                    break;
            }
        } else {
            switch (arr[1]) {
                case "2":
                    res += " twenty";
                    break;
                case "3":
                    res += " thirty";
                    break;
                case "4":
                    res += " forty";
                    break;
                case "5":
                    res += " fifty";
                    break;
                case "6":
                    res += " sixty";
                    break;
                case "7":
                    res += " seventy";
                    break;
                case "8":
                    res += " eighty";
                    break;
                case "9":
                    res += " ninety";
                    break;
            }
            switch (arr[2]) {
                case "1":
                    res += " one";
                    break;
                case "2":
                    res += " two";
                    break;
                case "3":
                    res += " three";
                    break;
                case "4":
                    res += " four";
                    break;
                case "5":
                    res += " five";
                    break;
                case "6":
                    res += " six";
                    break;
                case "7":
                    res += " seven";
                    break;
                case "8":
                    res += " eight";
                    break;
                case "9":
                    res += " nine";
                    break;
            }
        }
    } else if (number > 19) {
        switch (arr[0]) {
            case "2":
                res += "twenty";
                break;
            case "3":
                res += "thirty";
                break;
            case "4":
                res += "forty";
                break;
            case "5":
                res += "fifty";
                break;
            case "6":
                res += "sixty";
                break;
            case "7":
                res += "seventy";
                break;
            case "8":
                res += "eighty";
                break;
            case "9":
                res += "ninety";
                break;
        }
        switch (arr[1]) {
            case "1":
                res += " one";
                break;
            case "2":
                res += " two";
                break;
            case "3":
                res += " three";
                break;
            case "4":
                res += " four";
                break;
            case "5":
                res += " five";
                break;
            case "6":
                res += " six";
                break;
            case "7":
                res += " seven";
                break;
            case "8":
                res += " eight";
                break;
            case "9":
                res += " nine";
                break;
        }
    } else {
        let dec = parseInt("".concat(arr[0], arr[1]));
        switch (dec) {
            case 0:
                res += "zero";
                break;
            case 1:
                res += "one";
                break;
            case 2:
                res += "two";
                break;
            case 3:
                res += "three";
                break;
            case 4:
                res += "four";
                break;
            case 5:
                res += "five";
                break;
            case 6:
                res += "six";
                break;
            case 7:
                res += "seven";
                break;
            case 8:
                res += "eight";
                break;
            case 9:
                res += "nine";
                break;
            case 10:
                res += "ten";
                break;
            case 11:
                res += "eleven";
                break;
            case 12:
                res += "twelve";
                break;
            case 13:
                res += "thirteen";
                break;
            case 14:
                res += "fourteen";
                break;
            case 15:
                res += "fifteen";
                break;
            case 16:
                res += "sixteen";
                break;
            case 17:
                res += "seventeen";
                break;
            case 18:
                res += "eighteen";
                break;
            case 19:
                res += "nineteen";
                break;
        }
    }
    return res;

    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
        case 100:
            return "one hundred";
        case 200:
            return "two hundred";
        case 300:
            return "three hundred";
        case 400:
            return "four hundred";
        case 500:
            return "five hundred";
        case 600:
            return "six hundred";
        case 700:
            return "seven hundred";
        case 800:
            return "eight hundred";
        case 900:
            return "nine hundred";
    }
};
