(function($) {

    $.fn.datePicker = function() {

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
        var currentMonth;
        var currentYear;
        
        function createMonth(month, year) {
            currentMonth = month;
            currentYear = year;

            var startDate = new Date(year, month, 1);
            var firstDateInCalendar = new Date(startDate.setDate(startDate.getDate() - startDate.getDay()));

            $('.date-picker').after(
                '<div class="calendar">' + 
                '<header>' +
                '<a href="#" class="previous">&lArr;</a>' +
                '<h3>' + months[month] + ' ' + year + '</h3>' + 
                '<a href="#" class="next">&rArr;</a>' +
                '</header>' +
                '<div class="weekdays">' + '</div>' +
                '<div class="days">' + '</div>' +
                '</div>'
                );

            for (var i = 0; i < weekdays.length; i++) {
                $('.weekdays').append('<span>' + weekdays[i] + '</span>');
            }

            while (true) {
                var dayOfMonth = firstDateInCalendar.getDay();

                if(((firstDateInCalendar.getMonth() > month && firstDateInCalendar.getFullYear() >= year) || firstDateInCalendar.getFullYear() > year) && dayOfMonth == 0) {
                    break;
                }

                var date = firstDateInCalendar.getDate();
                var monthNumber = +(firstDateInCalendar.getMonth()) + 1;

                var today = new Date();
                var kindOfDay = '';
                

                if(dayOfMonth == 0 || dayOfMonth == 6) {
                    kindOfDay = 'dayOff';
                }
                if(firstDateInCalendar.getMonth() != month) {
                    kindOfDay = 'noActive';
                }
                if(date == today.getDate() && firstDateInCalendar.getMonth() == today.getMonth() && firstDateInCalendar.getFullYear() == today.getFullYear()) {
                    kindOfDay = 'today';
                }

                $('.days').append('<a href="#" class="day ' + kindOfDay + '" data-month="' + monthNumber + '"' + 'data-year="' + firstDateInCalendar.getFullYear() + '">' + date + '</a>');
                firstDateInCalendar = new Date(firstDateInCalendar.setDate(date + 1));
            }
        }

        function writeCheckedDate(e) {
            var day = e.target.innerText;
            var month = $(e.target).attr('data-month');
            var year = $(e.target).attr('data-year');

            if(day < 10) {
                day = '0' + day;
            }

            if(month < 10) {
                month = '0' + month;
            }

            $('.date-picker')[0].value = day + ' / ' + month + ' / ' + year;
        }

        $('.date-picker').on('click', function() {
            if($('.calendar').length) {
                $('.calendar').remove();
            } else {
                var currentDate = new Date();
                currentMonth = currentDate.getMonth();
                currentYear = currentDate.getFullYear();

                createMonth(currentMonth, currentYear);
            }
        }); 

        $('body').on('click', '.day', function(e){
            writeCheckedDate(e);
            $('.calendar').remove();
        });

        $('body').on('click', '.previous', function(e){
            if($('.calendar').length) {
                $('.calendar').remove();
            }
            
            if (currentMonth > 0) {
                currentMonth -= 1;
            } else {
                currentMonth = 11;
                currentYear -= 1;
            }
            
            createMonth(currentMonth, currentYear);
        });

        $('body').on('click', '.next', function(e){
            if($('.calendar').length) {
                $('.calendar').remove();
            }
            
            if (currentMonth < 11  ) {
                currentMonth += 1;
            } else {
                currentMonth = 0;
                currentYear += 1;
            }
            
            createMonth(currentMonth, currentYear);
        });

        return this;
    }

})(jQuery);