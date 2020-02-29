import java.util.Scanner;
import javax.swing.JOptionPane;

public class javaTest{
    
    static String num;
    static int num2;
    char[] spacing;
    
   static public void notCorrect(){
         boolean isCorrect = false;
        Scanner input = new Scanner(System.in);
//        prompt user for entering digit
        System.out.println("enter a 5 digit long number");
        num = input.next();
        // num2 = Integer.parseInt(num); // convert the string to integer
//        validate if the lenght is up to 5
        if(num.length() == 5){
            System.out.println("");
            System.out.println("Here are the number you entered in spaces");
            System.out.println(num.charAt(0)+" "+num.charAt(1)+" "+num.charAt(2)+" "+num.charAt(3)+" "+num.charAt(4)+" ");
        }
        
       else if((num.length() >5) || (num.length() <5)){
            System.err.println("The number you entered isn't 5 digit long");
            System.out.println("Try again");
            System.out.println("");
            notCorrect();// call method here.
        }
        
    }
    
    public static void main(String[] args){
       notCorrect();
    }
}