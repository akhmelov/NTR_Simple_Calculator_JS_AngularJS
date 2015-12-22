/* Controller handles calculations and binding
 */

var myApp = angular.module('myApp',[])
.controller('Ctrl', function Ctrl($scope) {

        var textInput;
        var numberA;
        var numberB;
        var lastOperation;
        var isActionClickLast;
        var isErrorUser;

        $scope.output = textInput;
        $scope.operationToken = lastOperation;

        $scope.numberClick = numberClick;
        $scope.actionClick = actionClick;
        $scope.isErrorUser = isErrorUser;


        function numberClick(val)
        {
            textInput = $scope.output;
            if (!textInput)
                textInput = "";
            if(val == "." && typeof textInput === "string" && textInput.indexOf(".") != -1
                || textInput.length > 10 || (textInput == "0" && val == "0"))
                return;
            if (isActionClickLast || textInput == "ERROR")
                textInput = val;
            else
                textInput += val;
            isActionClickLast = false;
            $scope.output = textInput;
            $scope.isErrorUser = isErrorUser;
        }

        function actionClick(val)
        {
            textInput = $scope.output;
            if (!textInput)
                textInput = "";
            var actionText = val;
            if(textInput.length == 0){
                return;
            }
            isActionClickLast = true;
            switch (actionText)
            {
                case "+":
                    if(isNaN(numberA) || !numberA)
                        numberA = parseFloat(textInput);
                    else{
                        numberB = parseFloat(textInput);
                        numberA = getResult(numberA, numberB);
                    }
                    textInput =  numberA;


                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    lastOperation = "+";
                    numberB = undefined;
                    break;
                case "-":
                    if(isNaN(numberA) || !numberA)
                        numberA = parseFloat(textInput);
                    else{
                        numberB = parseFloat(textInput);
                        numberA = getResult(numberA, numberB);
                    }
                    textInput =  numberA;


                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    lastOperation = "-";
                    numberB = undefined;
                    break;
                case "*":
                    if(isNaN(numberA) || !numberA)
                        numberA = parseFloat(textInput);
                    else{
                        numberB = parseFloat(textInput);
                        numberA = getResult(numberA, numberB);
                    }
                    textInput =  numberA;


                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    lastOperation = "*";
                    numberB = undefined;
                    break;
                case "/":
                    if(isNaN(numberA) || !numberA)
                        numberA = parseFloat(textInput);
                    else{
                        numberB = parseFloat(textInput);
                        numberA = getResult(numberA, numberB);
                    }
                    textInput =  numberA;

                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    lastOperation = "/";
                    numberB = undefined;
                    break;
                case "+/-":
                    numberB = parseFloat(textInput);
                    textInput = ((-1) * numberB);

                    numberB = undefined;
                    isActionClickLast = false; //exception from logic
                    break;
                case "sqrt":
                    numberB = parseFloat(textInput);

                    lastOperation = "sqrt";
                    numberB = Math.sqrt(numberB);
                    textInput = numberB;
                    textInput = (isNaN(numberB)) ? "ERROR" : numberB;
                    numberB = undefined;
                    break;
                case "%":
                    if(isNaN(numberA) || !numberA)
                        numberA = parseFloat(textInput);
                    else{
                        numberB = parseFloat(textInput);
                        numberA = getResult(numberA, numberB);
                    }
                    textInput =  numberA;


                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    lastOperation = "%";
                    numberB = undefined;
                    break;
                case "C":
                    lastOperation = undefined;
                    textInput = "";
                    numberA = undefined;
                    numberB = undefined;
                    break;
                case "=":
                    if (isNaN(numberA))
                        numberA = textInput;
                    if(!isNaN(numberB))
                        numberA = getResult(numberA, numberB);
                    else{
                        numberB = textInput;
                        numberA = getResult(numberA, numberB);
                    }
                    //lastOperation = "=";

                    textInput = (isNaN(numberA)) ? "ERROR" : numberA;
                    numberA = undefined;
                    break;
            }
            var tmpTextInput;
            if (textInput != "")
            {
                tmpTextInput = parseFloat(textInput);
                if (tmpTextInput < -99999999999 || tmpTextInput > 99999999999)
                {
                    textInput = "OUT OF RANGE";
                }
                else
                {
                    textInput = (textInput.length > 11) ? textInput.substring(0, 11) : textInput;
                }
            }
            if (textInput == "ERROR" || textInput == "OUT OF RANGE")
                isErrorUser = true;
            else
                isErrorUser = false;
            $scope.output = textInput;
            $scope.operationToken = lastOperation;
            $scope.isErrorUser = isErrorUser;
        }

        function getResult(numberA, numberB)
        {
            var result = numberA;
            var tmp;
            switch (lastOperation)
            {
                case "+":
                    tmp = result + numberB;
                    result += numberB;
                    break;
                case "-":
                    tmp = result - numberB;
                    result -= numberB;
                    break;
                case "*":
                    tmp = result * numberB;
                    result *= numberB;
                    break;
                case "/":
                    tmp = result / numberB;
                    result /= numberB;
                    break;
                case "%":
                    tmp = result * (numberB / 100);
                    result = result * (numberB / 100);
                    break;
            }
            return result;
        }

});
