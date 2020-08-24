

const tasks = [];

const addTask = () => {
	$(`<li>`+ addTask[addTask.length - 1] +`</li>`).appendTo('#To-Do');
	$('li').on('click', (e) => {
		$(e.currentTarget).appendTo('#completed')

	});
	$('#completed').on('click', (e) => {
		$(e.currentTarget).remove();
	})

};

$(() => {
	$('#submit').on('click', (e) => {
		e.preventDefault();
		console.log($('#input-box').val());
		tasks.push($('#input-box').val());
		addTask();

	})
})













