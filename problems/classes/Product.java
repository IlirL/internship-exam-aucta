package Problems.classes;

public class Product implements Comparable<Product>{
	String ime;
	String kategorija;
	float price;
	
	public Product(String ime, String kategorija, float price){
		this.ime = ime;
		this.kategorija = kategorija;
		this.price = price;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getKategorija() {
		return kategorija;
	}

	public void setKategorija(String kategorija) {
		this.kategorija = kategorija;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	
	public void print()
	{
		System.out.println(this.ime + " " + this.kategorija + " " + this.price);
	}
	
	@Override public int compareTo(Product other)
	{
		if(price < other.getPrice())
			return -1;
		return price == other.getPrice() ? 0 : 1;
		}
}
