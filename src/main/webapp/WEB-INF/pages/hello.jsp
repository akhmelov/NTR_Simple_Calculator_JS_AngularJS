<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<link href="<c:url value="/resources/css/main.css" />" rel="stylesheet">
	<script src="<c:url value="/resources/js/main.js" />"></script>
<body>
	<div ng-app="myApp" ng-controller="Ctrl">
		<div class="calcbody">
			<table>
				<tr>
					<td colspan="4">
						<div class="thinborder">
							<p class="output" name="output">{{output}}
								<br>{{operationToken}}</p>
						</div>
					</td>
					<td>
						<button name="btnClear" class="operationbutton btnClear" ng-click="actionClick('C')">C</button>
					</td>
				</tr>
				<tr>
					<td><button ng-disabled="isErrorUser" name="btn7" class="numberbutton" value="7" ng-click="numberClick('7')">7</button></td>
					<td><button ng-disabled="isErrorUser" name="btn8" class="numberbutton" value="8" ng-click="numberClick('8')">8</button></td>
					<td><button ng-disabled="isErrorUser" name="btn9" class="numberbutton" value="9" ng-click="numberClick('9')">9</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="actionClick('/')">/</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="actionClick('sqrt')">sqrt</button></td>
				</tr>
				<tr>
					<td><button ng-disabled="isErrorUser" name="btn4" class="numberbutton" value="4" ng-click="numberClick('4')">4</button></td>
					<td><button ng-disabled="isErrorUser" name="btn5" class="numberbutton" value="5" ng-click="numberClick('5')">5</button></td>
					<td><button ng-disabled="isErrorUser" name="btn6" class="numberbutton" value="6" ng-click="numberClick('6')">6</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="actionClick('*')">*</button></td>
					<td><button ng-disabled="isErrorUser" name="btnPlus" class="operationbutton" ng-click="actionClick('%')">%</button></td>
				</tr>
				<tr>
					<td><button ng-disabled="isErrorUser" name="btn1" class="numberbutton" value="1" ng-click="numberClick('1')">1</button></td>
					<td><button ng-disabled="isErrorUser" name="btn2" class="numberbutton" value="2" ng-click="numberClick('2')">2</button></td>
					<td><button ng-disabled="isErrorUser" name="btn3" class="numberbutton" value="3" ng-click="numberClick('3')">3</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="actionClick('-')">-</button></td>
					<td rowspan="2"><button name="btnEquals" class="operationbutton btnClear" ng-click="actionClick('=')">=</button></td>
				</tr>
				<tr>
					<td><button ng-disabled="isErrorUser" name="btn0" class="numberbutton" value="0" ng-click="numberClick('0')">0</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="numberClick('.')">.</button></td>
					<td><button ng-disabled="isErrorUser" name="btnMinus" class="operationbutton" ng-click="actionClick('+/-')">+/-</button></td>
					<td><button ng-disabled="isErrorUser" name="btnPlus" class="operationbutton" ng-click="actionClick('+')">+</button></td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>