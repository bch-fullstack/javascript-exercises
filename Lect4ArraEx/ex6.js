/*Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
Student Name Marks
David 80
Vinoth 77
Divya 88
Ishitha 95
Thomas 68
The grades are computed as follows:
Range Grade
    <60 F
    <70 D
    <80 C
    <90 B
    <100 A*/

    function getGrade(name, points) {
        var total = 0;
        for (i = 0; i < points.length; i++) {
            total += points[i];
            var average = total / points.length;
        }
        if (average < 60) {
            return name + " has failed";
        } else if (average < 70) {
            return name + " has scored D";
        } else if (average >= 70 && average < 80) {
            return name + " has scored C";
        } else if (average >= 80 && average < 90) {
            return name + " has scored B"
        } else if (average >= 90) {
            return name + " has scored A"
        }
    
    }
    console.log(getGrade('Stanley', [67, 76, 67, 79])); 