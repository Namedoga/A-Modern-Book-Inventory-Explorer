public class Student extends Person {
    
    
    public Student(String name, int id) {
        super(name, id);
    }

    public double calculateFine(int daysLate) {
        return daysLate * 1.0;  
    }

    @Override
    public void displayInfo() {
        System.out.println("Student - Name: " + name + ", ID: " + id);
    }
}
