    var options = {
        valueNames: [{data: ['role', 'status', 'program', "classes", "class"]}]
    };
    var peopleList = new List('people', options);
    var checkedBoxes;

    filterCurrent();

    function updateFilters() {
        var includedRoles = [];
        var includedStatuses = [];
        var includedPrograms = [];
        var includedClasses = [];
        var includedClass = [];
        checkedBoxes = document.querySelectorAll('input:checked');
        for (var i = 0; i < checkedBoxes.length; ++i) {
            if (checkedBoxes[i].id.includes('role')) {
                includedRoles.push(checkedBoxes[i].id.substring(5));
            }
            if (checkedBoxes[i].id.includes('status')) {
                includedStatuses.push(checkedBoxes[i].id.substring(7));
            }
            if (checkedBoxes[i].id.includes('classes')) {
                includedClasses.push(checkedBoxes[i].id.substring(8));
            }
            if (checkedBoxes[i].id.includes('first')) {
                includedFirst.push(checkedBoxes[i].id.substring(6));
            }
            if (checkedBoxes[i].id.includes('program')) {
                includedPrograms.push(checkedBoxes[i].id.substring(8));
            }
            if (checkedBoxes[i].id.includes('class')) {
                includedClass.push(checkedBoxes[i].id.substring(7));
            }
        }

        filter(includedRoles, includedStatuses, includedPrograms, includedClasses, includedClass);
    }

    function filter(includedRoles, includedStatuses, includedPrograms, includedClasses, includedClass) {
        var total = 0;
        peopleList.filter(function (item) {
            total++;
            if (includedRoles.length > 0) {
                if (includedRoles.indexOf(item.values()['role']) == -1) {
                    total--;
                    return false;
                }
            }
            if (includedStatuses.length > 0) {
                if (includedStatuses.indexOf(item.values()['status']) == -1) {
                    total--;
                    return false;
                }
            }
            if (includedPrograms.length > 0) {
                if (includedPrograms.indexOf(item.values()['program']) == -1) {
                    total--;
                    return false;
                }
            }
            if (includedClass.length > 0) {
                if (includedFirst.indexOf(item.values()['class']) == -1) {
                    total--;
                    return false;
                }
            }
            if (includedClasses.length > 0) {
                if (includedClasses.indexOf(item.values()['classes']) == -1) {
                    total--;
                    return false;
                }
            }
            return true;
        });
        document.getElementById("total").innerHTML = total;
        return false;
    }

    function showAll() {
        checkedBoxes = document.querySelectorAll('input:checked');
        for (var i = 0; i < checkedBoxes.length; ++i) {
            checkedBoxes[i].checked = false;
        }
        peopleList.filter(function (item) {
            return true;
        });
        return false;
    }

    function filterCurrent() {
        var total = 0;
        peopleList.filter(function (item) {
            if (item.values()['role'] == 3 && item.values()['status'] == 1) {
                total++;
                return true;
            } else {
                return false;
            }
        });
        document.getElementById("total").innerHTML = total;
    }
