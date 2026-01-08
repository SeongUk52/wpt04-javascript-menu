import {MissionUtils} from "@woowacourse/mission-utils/src";
import {validateCarNames} from "../util/MenuValidator.js";

const MenuView = {
    async readDate() {
        return await MissionUtils.Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
    },

    //재입력 코드 (오류 발생시 프로그램 종료일 경우는 사용 금지) 예제
    /*
    async getMonthAndDayOfWeek() {
        try {
            const input = await MissionUtils.Console.readLineAsync('입력메시지');
            validateCarNames(input);
            InputValidation.isValidateForm(input);
            InputValidation.isValidateMonth(input);
            InputValidation.isValidateDayOfWeek(input);
            return input.split(',');
        } catch (error) {
            Console.print(error.message);
            return await this.getMonthAndDayOfWeek();
        }
    }
    */

    async inputCoachNames() {
        try {
            const input = await MissionUtils.Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)');

            //TODO: 검증코드구현
            return input.split(',');
        } catch (error) {
            MissionUtils.Console.print(error.message);
            return await this.inputCoachNames();
        }
    }


}

export default MenuView;