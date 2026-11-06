
// Function to calculate total

function calculateTotal(marks) {

    let total = 0;

    for (let i = 0; i < marks.length; i++) {

        total = total + marks[i];

    }

    return total;
}




function calculateGrade(percentage) {

    if (percentage >= 90)
        return "A";

    else if (percentage >= 75)
        return "B";

    else if (percentage >= 60)
        return "C";

    else if (percentage >= 40)
        return "D";

    else
        return "Fail";
}


// Main function

function calculateResult() {

    let marks = [

        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)

    ];

    // Check input

    for (let i = 0; i < 5; i++) {

        let input = document.getElementById("m" + (i + 1));

        if (input.value === "" || marks[i] < 0 || marks[i] > 100) {

            document.getElementById("result").innerHTML =
                "Please enter marks between 0 and 100.";

            return;
        }
    }

    

    let total = calculateTotal(marks);

    

    let average = total / 5;

    

    let percentage = (total / 500) * 100;

    

    let grade = calculateGrade(percentage);

    

    let status;

    if (percentage >= 40)
        status = "PASS";
    else
        status = "FAIL";


    

    document.getElementById("result").innerHTML =

        "Total Marks: " + total + "<br>" +

        "Average: " + average + "<br>" +

        "Percentage: " + percentage + "%<br>" +

        "Grade: " + grade + "<br>" +

        "Status: " + status;

}
