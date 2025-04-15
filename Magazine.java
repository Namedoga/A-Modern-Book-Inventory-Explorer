public class Magazine extends LibraryItem {
   
    public Magazine(String title, String author) {
        super(title, author);
    }

    @Override
    public void displayDetails() {
        System.out.println("Magazine: " + title + " by " + author + " - " + (isAvailable ? "Available" : "Not Available"));
    }
}
