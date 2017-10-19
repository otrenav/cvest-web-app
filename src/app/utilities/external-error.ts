
import { HttpErrorResponse } from '@angular/common/http';

export class ExternalError {

    public static http(error: HttpErrorResponse) {
        if (error.error instanceof Error) {
            console.log('CVEST: Client-side or network error');
            console.log(error.error.message);
        } else {
            console.log('CVEST: Backend error');
            console.log('Code: ', error.status);
            console.log('Body: ', error.error);
        }
    }
}
