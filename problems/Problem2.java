package Problems;

import java.util.ArrayList;
import java.util.List;

import Problems.classes.Cart;
import Problems.classes.Product;

public class Problem2 {
		
	public static void main(String[] args) {
		Product p1 = new Product("Snickers", "chocolate", 12);
		Product p2 = new Product("Milka", "chocolate", 22);
		Product p3 = new Product("Mars", "chocolate", 16);
		Product p4 = new Product("Peanuts", "nuts", 50);
		Product p5 = new Product("Badem", "nuts", 42);
		Product p6 = new Product("Evina", "water", 10);
		Product p7 = new Product("Rosa", "water", 11);
		Product p8 = new Product("Ladna", "water", 13);
		
		Cart c = new Cart();
		c.addProduct(p1);
		c.addProduct(p2);
		c.addProduct(p3);
		c.addProduct(p4);
		c.addProduct(p5);
		c.addProduct(p6);
		c.addProduct(p7);
		c.addProduct(p8);
		c.addProduct(p1);
		c.addProduct(p2);
		c.addProduct(p3);
		c.addProduct(p4);
		c.addProduct(p5);
		
			
		
		System.out.println("Print the cheapest products: " + "2");
		List<Product> prods = new ArrayList<>(c.getCheapestN(2));
		for(Product p: prods)
		{
			p.print();
		}
		
		c.printByCategory("Print by category: " + "chocolate");
			
		System.out.println("Printing the receipt");
		c.printPaymentReceipt();
		
		System.out.println("Total Price(including ddv): " +  c.getTotalPrice());

	}
}
