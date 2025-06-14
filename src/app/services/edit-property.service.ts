import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://api.dev.kutralamrooms.in/api/propertyDetails';

  constructor(private http: HttpClient) {}

  /** 
   * Sends property data as query parameters using POST.
   * @param formData Object containing all property form fields.
   * @returns Observable of the response.
   */
  addProperty(formData: Record<string, any>): Observable<any> {
    let params = new HttpParams();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== undefined && formData[key] !== null) {
        params = params.set(key, formData[key]);
      }
    });

    // The backend expects data as query params, not in the body
    return this.http.post(this.apiUrl, {}, { params });
  }
}