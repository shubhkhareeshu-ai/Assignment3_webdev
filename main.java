
import java.util.Scanner;

public class Main {

    
    static int calculateTotal(int marks[]) {

        int total = 0;

        for (int i = 0; i < marks.length; i++) {
            total = total + marks[i];
        }

        return total;
    }

    
    static String calculateGrade(double percentage) {

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

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int marks[] = new int[5];

        System.out.println("STUDENT RESULT MANAGEMENT SYSTEM");

        
        for (int i = 0; i < 5; i++) {

            System.out.print("Enter marks of subject " + (i + 1) + ": ");

            marks[i] = sc.nextInt();
        }

        
        int total = calculateTotal(marks);

        
        double average = total / 5.0;

        
        double percentage = (total / 500.0) * 100;

       
        String grade = calculateGrade(percentage);

        
        System.out.println("\n----- STUDENT RESULT -----");

        System.out.println("Total Marks: " + total);

        System.out.println("Average: " + average);

        System.out.println("Percentage: " + percentage + "%");

        System.out.println("Grade: " + grade);

        if (percentage >= 40)
            System.out.println("Status: PASS");
        else
            System.out.println("Status: FAIL");

        sc.close();
    }
}
