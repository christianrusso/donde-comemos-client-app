import { Component, ViewChild,ElementRef,Input } from '@angular/core';
import { MercadoPagoProvider } from "./mercado-pago.provider";
import { CUSTOM_IMAGE } from "./config";
import { Events, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { LoaderProvider } from '../../providers/loader/loader';
import { ToastProvider } from '../../providers/toast/toast';


@Component({
  selector: 'mercado-pago',
  templateUrl: 'mercado-pago.html',
})
export class MercadoPagoComponent {
  @ViewChild('cardNumber') cardNumber:ElementRef;
  @ViewChild('payButton') payButton;
  @ViewChild('payForm') payForm; 
  @ViewChild('docNumber') docNumber; 
  @Input() data:any = {};
  @Input() publicKey:any;
  @Input('mpId') mpId;

  image:string = null;

  constructor(
    public mercadoPagoProvider: MercadoPagoProvider, 
    private userProvider: UserProvider,
    private viewController: ViewController,
    private loader: LoaderProvider,
    private toaster: ToastProvider,
    private events: Events) {

    this.image = CUSTOM_IMAGE;

  }

  ngAfterViewInit(){
    this.mercadoPagoProvider.initialize(this.publicKey);
    this.mercadoPagoProvider.setCardNumberElement(this.cardNumber);
    this.mercadoPagoProvider.setPayButtonElement(this.payButton);
    this.mercadoPagoProvider.setPayFormElement(this.payForm);
  }

  submitForm(){
    
    this.mercadoPagoProvider.setEmail(this.userProvider.user.email);
    this.mercadoPagoProvider.setDocNumber(this.docNumber);
    this.mercadoPagoProvider.setData(this.data);
    
    let form = document.getElementById("payForm");
    this.loader.display('Estamos creando su pedido...')
    this.mercadoPagoProvider.doPay(form).then((mpId)=>{
      this.events.publish('mp:created');
      this.mpId = mpId;
      // this.viewController.dismiss(this.mpId);
      // this.orderProvider.sendMercadopagoID()
    });

  }




}
