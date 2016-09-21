'use strict';

window.onload = function() {

    localStorage.setItem('someTest', JSON.stringify(Test));
    
    var someTest = localStorage.getItem('someTest');
    someTest = JSON.parse(someTest);

    var tmpl = _.template(document.getElementById('test').innerHTML);

    var content = tmpl({data: someTest});

    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = content;
    
    function getResultOfTest() {

        var inputs = document.getElementsByTagName('input');
        var result = true;

        for (var i = 0; i < inputs.length; i++) {
            var questionId = inputs[i].attributes['data-question-id'].value;
            var answerId = inputs[i].attributes['data-answer-id'].value;

            for (var q = 0; q < Test.questions.length; q++) { 
                if (Test.questions[q].id == questionId) {
                    for (var a = 0; a < Test.questions[q].answer.length; a++) {
                        if (Test.questions[q].answer[a].id == answerId) {
                            if (inputs[i].checked != Test.questions[q].answer[a].check) {
                                result = false;  
                            }  
                            if (inputs[i].checked) {
                                    if (inputs[i].checked == Test.questions[q].answer[a].check) {
                                     inputs[i].parentElement.style.color = 'green';
                                } else {
                                    inputs[i].parentElement.style.color = 'red';
                                    inputs[i].parentElement.style.textDecoration = 'line-through';
                                }    
                            }           
                        }
                    }
                }                
            }
        }
        return result;
    }

    function showResult() {
        var result = getResultOfTest();

        if(result) {
            result = 'Вы успешно прошли тест.';
        } else {
            result = 'Вы не прошли тест.';
        }

        document.querySelector('.test-result').innerText = result;
    } 

    var modalWindow = document.querySelector('.my-modal');
    var plugForPage = document.querySelector('.plug');

    function showModal() {
        plugForPage.style.opacity = 0.7;
        plugForPage.style.display = 'block';

        modalWindow.style.display = 'block';
        modalWindow.style.top = '200px';
        showResult();
    }

    function hideModal() {
        plugForPage.style.display = 'none';
        modalWindow.style.display = 'none';
    }

    var verifyButton = document.querySelector('#verify');

    function doAgain() {
        hideModal();
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
            inputs[i].parentElement.style.color = '#333';
            inputs[i].parentElement.style.textDecoration = 'none';
        }
        if (verifyButton.innerText == 'Пройти еще раз') {
            verifyButton.innerText = 'Проверить мои результаты';
            verifyButton.removeEventListener('click', doAgain);
            verifyButton.addEventListener('click', showModal);
        }
    }

    function showAnsvers() {
        hideModal();
        verifyButton.innerText = 'Пройти еще раз';
        verifyButton.removeEventListener('click', showModal);
        verifyButton.addEventListener('click', doAgain);
    }

    document.querySelector('#verify').addEventListener('click', showModal);

    document.querySelector('.close').addEventListener('click', doAgain);

    document.querySelector('.do-again').addEventListener('click', doAgain);

    document.querySelector('.show-result').addEventListener('click', showAnsvers);
};
