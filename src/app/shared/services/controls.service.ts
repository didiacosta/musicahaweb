import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Swal, { SweetAlertResult} from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  public async msgSucces(message:any) {
    // this.snackBar.open(message, 'Cerrar', this.configSucces);
    await Swal('Información', message, 'success');
    
  }

  public async msgInfo(message:any) {
    // this.snackBar.open(message, 'Cerrar', this.configError);
    await Swal('Información', message, 'info');
  }

  public async msgWarning(message:any) {
    // this.snackBar.open(message, 'Cerrar', this.configError);
    await Swal('', message, 'warning');
  }

  public async msgError(message:any) {
    // this.snackBar.open(message, 'Cerrar', this.configError);
    await Swal('Error', message, 'error');
  }

  public async confirm(title:any, message:any, type:any, callBack?: (value: SweetAlertResult) => void,
                confirmButton = true, closeButton = false, cancelButton = true  ) {
    await Swal({
      title: title,
      text: message,
      type: type,
      showConfirmButton: confirmButton,
      showCloseButton: closeButton,
      showCancelButton: cancelButton,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value)
      callBack(result);
    });
  }


}
