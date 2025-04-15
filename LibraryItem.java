public abstract class LibraryItem {
    
    protected String title;
    protected String author;
    protected boolean isAvailable;

    public LibraryItem(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    public abstract void displayDetails();

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailability(boolean available) {
        this.isAvailable = available;
    }
}
