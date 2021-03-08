import { Component, HostBinding, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Output, ViewChild, ElementRef, Input } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';
import { Wizytowka } from '../wizytowka/wizytowka';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {
  adres = '';
  response = {};
  companyInfo;
  pobraneId = '';
   pobranyUser = '';
   token;

  public pobranaWizytowka = new Wizytowka();
 
  

  constructor(private route: ActivatedRoute, private http: HttpClient){ }

  ngOnInit(): void {

    this.adres = "http://localhost:8000/api/businesscard/1/";
    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization' : 'Bearer '+this.token
        //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExMzQ3NjU0LCJqdGkiOiJhOTU3YjE0YzZiY2Y0MGU3ODhkZTBkY2FiZGIzYzM1MiIsInVzZXJfaWQiOjR9.JYL0RCjDKUmwYyLBn_G0iZ7N0PquTBIUliKr6GiD4So'
      })
    };
        
        this.http.get(this.adres,httpOptions).subscribe((data: Wizytowka) => {
         
          this.pobranaWizytowka = data;
          this.pobraneId = this.pobranaWizytowka.id;
          this.pobranyUser = this.pobranaWizytowka.user;

          //DODAJE NA SZTYWNO GODZINY
          this.pobranaWizytowka.hours_mon_from = '09:00';
          this.pobranaWizytowka.hours_mon_till = '18:00';
          this.pobranaWizytowka.hours_tue_from = '09:00';
          this.pobranaWizytowka.hours_tue_till = '18:00';
          this.pobranaWizytowka.hours_wed_from = '09:00';
          this.pobranaWizytowka.hours_wed_till = '18:00';
          this.pobranaWizytowka.hours_thu_from = '09:00';
          this.pobranaWizytowka.hours_thu_till = '18:00';
          this.pobranaWizytowka.hours_fri_from = '09:00';
          this.pobranaWizytowka.hours_fri_till = '18:00';
          this.pobranaWizytowka.hours_fri_from = '09:00';
          this.pobranaWizytowka.hours_fri_till = '17:00';


        });


        this.companyInfo = new FormGroup({
          category: new FormControl(''),
          company_name: new FormControl(''),
          city: new FormControl(''),
          post_code: new FormControl(''),
          address: new FormControl(''),
          phone_number: new FormControl(''),
          facebook_url: new FormControl(''),
          instagram_url: new FormControl(''),
          hours_mon_from: new FormControl(''),
          hours_mon_till: new FormControl(''),
          hours_tue_from: new FormControl(''),
          hours_tue_till: new FormControl(''),
          hours_wed_from: new FormControl(''),
          hours_wed_till: new FormControl(''),
          hours_thu_from: new FormControl(''),
          hours_thu_till: new FormControl(''),
          hours_fri_from: new FormControl(''),
          hours_fri_till: new FormControl(''),
          hours_sat_from: new FormControl(''),
          hours_sat_till: new FormControl(''),
          hours_sun_from: new FormControl(''),
          hours_sun_till: new FormControl(''),
        });

      }
        UpdateCompanyInfo()
        {
          this.adres = "http://localhost:8000/api/businesscard/1/";
          const body =
          { 
            id: this.pobraneId,
            user: this.pobranyUser,
            category: this.companyInfo.value.category,
            company_name: this.companyInfo.value.company_name,
            city: this.companyInfo.value.city,
            post_code: this.companyInfo.value.post_code,
            address: this.companyInfo.value.address,
            phone_number: this.companyInfo.value.phone_number,
            facebook_url: this.companyInfo.value.facebook_url,
            instagram_url: this.companyInfo.value.instagram_url,
            hours_mon_from: this.pobranaWizytowka.hours_mon_from,
            hours_mon_till: this.pobranaWizytowka.hours_mon_till,
            hours_tue_from: this.pobranaWizytowka.hours_tue_from,
            hours_tue_till: this.pobranaWizytowka.hours_tue_till,
            hours_wed_from: this.pobranaWizytowka.hours_wed_from,
            hours_wed_till: this.pobranaWizytowka.hours_wed_till,
            hours_thu_from: this.pobranaWizytowka.hours_thu_from,
            hours_thu_till: this.pobranaWizytowka.hours_thu_till,
            hours_fri_from: this.pobranaWizytowka.hours_fri_from,
            hours_fri_till: this.pobranaWizytowka.hours_fri_till,
            hours_sat_from: this.pobranaWizytowka.hours_sat_from,
            hours_sat_till: this.pobranaWizytowka.hours_sat_till,
            hours_sun_from: this.pobranaWizytowka.hours_sun_from,
            hours_sun_till: this.pobranaWizytowka.hours_sun_till

            // hours_mon_from: this.companyInfo.value.hours_mon_from,
            // hours_mon_till: this.companyInfo.value.hours_mon_till,
            // hours_tue_from: this.companyInfo.value.hours_tue_from,
            // hours_tue_till: this.companyInfo.value.hours_tue_till,
            // hours_wed_from: this.companyInfo.value.hours_wed_from,
            // hours_wed_till: this.companyInfo.value.hours_wed_till,
            // hours_thu_from: this.companyInfo.value.hours_thu_from,
            // hours_thu_till: this.companyInfo.value.hours_thu_till,
            // hours_fri_from: this.companyInfo.value.hours_fri_from,
            // hours_fri_till: this.companyInfo.value.hours_fri_till,
            // hours_sat_from: this.companyInfo.value.hours_sat_from,
            // hours_sat_till: this.companyInfo.value.hours_sat_till,
            // hours_sun_from: this.companyInfo.value.hours_sun_from,
            // hours_sun_till: this.companyInfo.value.hours_sun_till
          }
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization' : 'Bearer '+this.token
              //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjExMzQ3NjU0LCJqdGkiOiJhOTU3YjE0YzZiY2Y0MGU3ODhkZTBkY2FiZGIzYzM1MiIsInVzZXJfaWQiOjR9.JYL0RCjDKUmwYyLBn_G0iZ7N0PquTBIUliKr6GiD4So'
            })
          };

       
          this.http.put(this.adres, body, httpOptions).subscribe();
          window.location.href = 'http://localhost:4200/formularz';
          //console.log(this.companyInfo.value.company_name);
          
        }

        









        
    
        // this.http.get(this.adres,httpOptions).subscribe((data: Wizytowka) => {
        //   this.profileFormReg.value.userName = data[0].username;
        // });
         // this.sub = this.route.params.subscribe(params => 
          //   {
          //     this.wybranakategoria = params['kategoria'];
          //     if (this.wybranakategoria!='wszyscy')
          //     {
          //       this.adres = "http://localhost:8000/api/businesscard/"+this.wybranakategoria;
          //     }

  
}