import { Component, OnInit } from "@angular/core";
import { ServiceCartService } from "../cart.service";
@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: ServiceCartService) {}
  shippingCosts = this.cartService.getShippingPrices();

  ngOnInit() {}
}
