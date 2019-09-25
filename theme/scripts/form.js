(function(window) {
    // You can enable the strict mode commenting the following line  
    // 'use strict';

    // This function will contain all our code
    function formLibrary() {
        var _formLibraryObject = {};

        // Just create a property to our library object.
        _formLibraryObject.customLog = function(thingToLog) {
            //console.log("My-Custom-Log > Type of variable : " + typeof(thingToLog));
            //console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
            //console.log("My-Custom-Log > Length : " + (thingToLog).length);

            var x, i, j, selElmnt, a, b, c;
            /*look for any elements with the class "custom-select":*/
            x = document.getElementsByClassName("custom-select");

            for (i = 0; i < x.length; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                /*for each element, create a new DIV that will act as the selected item:*/
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                /*for each element, create a new DIV that will contain the option list:*/
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");

                for (j = 0; j < selElmnt.length; j++) {
                    /*for each option in the original select element,
                    create a new DIV that will act as an option item:*/
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;

                    c_value = selElmnt.options[j].value;
                    c_id = selElmnt.options[j].id;
                    c_source = selElmnt.options[j].dataset.source;

                    c.setAttribute("data-value", c_value); //URL value
                    c.setAttribute("data-source", c_source); //file path, image path, etc

                    c.addEventListener("click", function(e) {
                        /*when an item is clicked, update the original select box,
                        and the selected item:*/
                        var y, i, k, s, h;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        h = this.parentNode.previousSibling;

                        for (i = 0; i < s.length; i++) {
                            if (s.options[i].innerHTML == this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                for (k = 0; k < y.length; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function(e) {
                    /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                    e.stopPropagation();
                    //closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }

            function closeAllSelect(elmnt) {
                /*a function that will close all select boxes in the document,
                except the current select box:*/
                var x, y, i, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");

                for (i = 0; i < y.length; i++) {
                    if (elmnt == y[i]) {
                        arrNo.push(i);
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }

                for (i = 0; i < x.length; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            /*if the user clicks anywhere outside the select box,
            then close all select boxes:*/
            document.addEventListener("click", closeAllSelect);
            //return console.log(thingToLog);

            /*if the user clicks in the form/input element,
            this will call this function*/
            function formFunction() {
                var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
                if ($("input[type=text]").is(':focus')) {
                    $this.siblings('label').addClass('active');
                }
                $(input_selector).each(function(element, index) {
                    var $this = $(this);
                    if ($this.attr('placeholder') != undefined || $this.val().length > 0) {
                        $this.siblings('label').addClass('active');
                    } else {
                        $this.siblings('label').removeClass('active');
                    }
                });

                /**
                 * Add active when element has focus
                 * @param {Event} e
                 */
                document.addEventListener('focus', function(e) {
                    if ($(e.target).is(input_selector)) {
                        $(e.target).siblings('label, .prefix, .suffix').addClass('active');
                    }
                }, true);

                /**
                 * Remove active when element is blurred
                 * @param {Event} e
                 */
                document.addEventListener('blur', function(e) {
                    var $inputElement = $(e.target);
                    if ($inputElement.is(input_selector)) {
                        var selector = '.prefix, .suffix';

                        if ($inputElement[0].value.length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
                            selector += ', label';
                        }
                        $inputElement.siblings(selector).removeClass('active');
                        //M.validate_field($inputElement);
                    }
                }, true);
            }
            formFunction();

        };

        return _formLibraryObject;
    }

    // We need that our library is globally accesible, then we save in the window
    if (typeof(window.formLibraryName) === 'undefined') {
        window.formLibraryName = formLibrary();
    }
})(window); // We send the window variable within our function

// Then we can call our custom function using
formLibraryName.customLog(); 