public class Book extends LibraryItem {
    
    public Book(String title, String author) {
        super(title, author);
    }

    @Override
    public void displayDetails() {
        System.out.println("Book: " + title + " by " + author + " - " + (isAvailable ? "Available" : "Not Available"));
    }
}
