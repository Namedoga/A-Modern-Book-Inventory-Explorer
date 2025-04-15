public class Teacher extends Person {
    
    
    public Teacher(String name, int id) {
        super(name, id);
    }

    public double calculateFine(int daysLate) {
        return daysLate * 0.5;  
    }

    @Override
    public void displayInfo() {
        System.out.println("Teacher - Name: " + name + ", ID: " + id);
    }
}
