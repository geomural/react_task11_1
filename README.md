Александра Шарифуллина

Домашнее задание 11.1

<h1>Redux Thunk</h1>

<h2>Медленное и глючное API (Redux)</h2>

Вам необходимо переделать проект с лекции с использованием Router, а также нормальной обработкой загрузки и отображения ошибок.

Всё состояние должно храниться в Redux Store. Для взаимодействия с HTTP используйте fetch и чистый Redux (без дополнительных библиотек), но помните, что вы работаете с побочными эффектами.

При переходе на главную страницу пользователя должно перенаправлять автоматически на адрес '/services', на котором загружается список услуг (GET http://localhost:7070/api/services).

При загрузке данных (GET) должен отображаться спиннер (лоадер):

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/thunk/api-redux/assets/spinner.png" alt=""/>

При получении ошибки (статус не 2xx):

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/thunk/api-redux/assets/error.png" alt=""/>

При нормальных загруженных данных:

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/thunk/api-redux/assets/list.png" alt=""/>

Для главной страницы сервер присылает данные в формате:

[
   {"id":1,"name":"Замена стекла","price":21000},
   {"id":2,"name":"Замена дисплея","price":25000},
   {"id":3,"name":"Замена аккумулятора","price":4000},
   {"id":4,"name":"Замена микрофона","price":2500}
]

При нажатии на кнопку удалить происходит удаление записи с последующей загрузкой всего списка.

Для удаления необходимо отправить запрос DELETE http://localhost:7070/api/serviced/:id, где id - id сервиса.

При нажатии на кнопку редактировать происходит переход по адресу: '/services/:id`, где id - это id сервиса.

В форму подтягиваются данные через GET-запрос (требования к отображению лоадара и ошибок - соответствующие):

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/thunk/api-redux/assets/edit.png" alt=""/>

Обратите внимание, что в форме есть поле content, которое приходит только если сделать запрос GET http://localhost:7070/api/services/:id:

{
    "id":1,
    "name":"Замена стекла",
    "price":21000,
    "content":"Стекло оригинал от Apple"
}

При нажатии на кнопку Отмена, происходит возврат к предыдущей странице.

При нажатии на кнопку Сохранить, происходит сохранение записи. При этом:
1. Спиннер должен отображаться
2. Если сохранение прошло успешно, выполняется переход на страницу со списком
3. Если сохранение прошло с ошибкой, переход не осуществляется, высвечивается сообщение об ошибке.

Для сохранения необходимо отправить POST-запрос по адресу http://localhost:7070/api/services, передав весь JSON (с id)

Примечание: в данном решении сохрание не происходит
<i>Исходное задание: https://github.com/netology-code/ra16-homeworks/tree/master/thunk/api-redux</i>
