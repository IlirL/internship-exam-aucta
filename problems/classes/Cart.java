package problems.classes;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Cart{
	 private ArrayList<Product> products;
	private static double ddv = 0.18;
	public Cart(){
		this.products = new ArrayList<Product>();
	}
	
	public void addProduct(Product product)
	{
		this.products.add(product);

	}
	
	public void printByCategory(String category) {
		
		Set<String> names = new HashSet<>();
		
		for(Product p : products) {
			if(p.getKategorija() .equals(category)) {
				names.add(p.getIme());
			}
		}
		
		for(String s : names)
		{
			System.out.print(s + " ");
		}
	}
	
	public List<Product> getCheapestN(int n){

		Set<Product> sortedProducts = new TreeSet<Product>();
		for(Product p : products)
			sortedProducts.add(p);

		List<Product> cheapestProducts = new ArrayList<>(n);
		
		for(Product p : sortedProducts) {
			if(n==0)
				break;
			cheapestProducts.add(p);
			n--;
		}
		
		return cheapestProducts;
	}
	
	public float getTotalPrice() {
		
		float sum = 0;
		
		for(Product p : products)
		{
			sum+=p.getPrice();
		}
		sum+=ddv*sum;
		return sum;
	}

	public void printPaymentReceipt() {
		//firstly i need to know the products bought
		//for this one i will use a set in which i will put all the products names on it
		
		Set<String> productNames = new HashSet<String>();
		for(Product i: products)
		{
			productNames.add(i.getIme());
		}
		
		for(String i : productNames)
		{
			int amount = 0;
			float priceForOne = 0;
			float totalPrice = 0;
			
			for(Product p : products)
			{
				if(p.getIme().equals(i))
				{
					amount++;
					priceForOne = p.getPrice();
				}
			}
			
			totalPrice = amount * priceForOne;
			System.out.println(i + " " +amount + " " + priceForOne+" "+ totalPrice );
		}
	}
}

 