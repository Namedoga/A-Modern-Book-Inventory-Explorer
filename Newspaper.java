public class Newspaper extends LibraryItem {
   
    public Newspaper(String title, String author) {
        super(title, author);
    }

    @Override
    public void displayDetails() {
        System.out.println("Newspaper: " + title + " by " + author + " - " + (isAvailable ? "Available" : "Not Available"));
    }
}
