$(function(){

    var html = $('#questionnaire').html();

    var questionnaire = {
        name: 'Редчиц Татьяна Андреевна',
        photo: 'img/photo.jpg',
        education: 'Магистр экономического факультета НТУ&laquo;ХПИ&raquo; (2011г.)',
        learnFrontend: [
            'Хочу получть интересную, креативную работу',
            'Хочу развиваться и самосовершенствоваться',
            'Хочу высокооплачиваемую работу'
        ],
        phone: '+380663936167',
        facebookLink: 'https://www.facebook.com/profile.php?id=100011098774550',
        facebook: 'Tatiana Redchits',
        feedback: 'Благодаря курсам GoIT и своей целеустремленности найду желаемую работу!'
    };

    var content = tmpl(html, {
        data: questionnaire
    });

    $('body').append(content);

});