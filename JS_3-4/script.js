var TestSheet = {
    createNewElement: function(tagName, className, parentName) {
        var element = document.createElement(tagName);
        parentName.appendChild(element);
        element.classList.add(className);
        return element;
    },

    createAnswers: function(i, j, parentAnswer) {
        var answer = this.createNewElement('li', 'checkbox', parentAnswer);   
        var answerWrapper = this.createNewElement('label', 'answer-wrapper', answer);        
        var answerContent = answerWrapper.innerHTML = Test['questions'][i]['answer'][j]['text'];

        var checkbox = this.createNewElement('input', 'checkbox', answerWrapper);
        checkbox.setAttribute('type', 'checkbox');
    },

    creteQuestions: function(i, parentQuestion) {
        var questionBlock = this.createNewElement('div', 'questionBlock', parentQuestion);
        var question = this.createNewElement('h3', 'question', questionBlock);
        question.innerHTML = i + 1 + '. ' + Test['questions'][i]['text'];
        var answerСhoices = this.createNewElement('ul', 'answer-choices', questionBlock);
        
        for (var j = 0; j < Test['questions'][i]['answer'].length; j++) {
            this.createAnswers(i, j, answerСhoices);
        }        
    },

    create: function() {
        var wrapper = this.createNewElement('div', 'wrapper', document.body);
        var title = this.createNewElement('h2', 'title', wrapper);
        title.innerHTML = Test['title'];

        for (var i = 0; i < Test['questions'].length; i++) {
            this.creteQuestions(i, wrapper);
        }

        var button = this.createNewElement('input', 'btn', wrapper);
        button.classList.add('btn-default');
        button.value = 'Проверить мои результаты';
        button.type = 'submit';
    }
}

TestSheet.create();