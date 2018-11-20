// function addClickHandler(element) {
//     element.click = function onClick(e) {
//         //alert("Clicked the " + element.nodeName)
//     }
// }

// function createTaskListModified() {
//   return [{
//     value: 'DemoApp-Task1',
//     text: translate('translationPrefix.menuItems.task1'),
//     route: 'DemoApp_Task1',
//     visible: User.hasRole('ROLE_ACCESS_TASK1')
//   }, {
//     value: 'DemoApp-Task2',
//     text: translate('translationPrefix.menuItems.task2'),
//     route: 'DemoApp_Task2',
//     visible: User.hasRole('ROLE_ACCESS_TASK2')
//   }, {
//     value: 'DemoApp-Task3',
//     text: translate('translationPrefix.menuItems.task3'),
//     route: 'DemoApp_Task3',
//     visible: User.hasRole('ROLE_ACCESS_TASK3')
//   }, {
//     value: 'DemoApp-Task4',
//     text: translate('translationPrefix.menuItems.task4'),
//     route: 'DemoApp_Task4',
//     visible: User.hasRole('ROLE_ACCESS_TASK4')
//   }, {
//     value: 'DemoApp-Task5',
//     text: translate('translationPrefix.menuItems.task5'),
//     route: 'DemoApp_Task5',
//     visible: User.hasRole('ROLE_ACCESS_TASK5')
//   }, {
//     value: 'DemoApp-Task6',
//     text: translate('translationPrefix.menuItems.task6'),
//     route: 'DemoApp_Task6',
//     visible: User.hasRole('ROLE_ACCESS_TASK6') && this.taskIsEnabled(6)
//  }, {
//     value: 'DemoApp-Task7',
//     text: translate('translationPrefix.menuItems.task7'),
//     route: 'DemoApp_Task7',
//     visible: User.hasRole('ROLE_ACCESS_TASK7')
//   }, {
//     value: 'DemoApp-Task8',
//     text: translate('translationPrefix.menuItems.task8'),
//     route: 'DemoApp_Task8',
//     visible: User.hasRole('ROLE_ACCESS_TASK8')
//   }];
// }

function add(num1, num2){
	return num1 + num2;
}

//var num = add(2,3);

module.exports = { add };