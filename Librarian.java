
public class Librarian extends Person {
    
    public Librarian(String name, int id) {
        super(name, id);
    }

    public void addBook() {
        System.out.println("Book added to the system.");
    }

    public void removeBook() {
        System.out.println("Book removed from the system.");
    }

    @Override
    public void displayInfo() {
        System.out.println("Librarian - Name: " + name + ", ID: " + id);
    }
}
