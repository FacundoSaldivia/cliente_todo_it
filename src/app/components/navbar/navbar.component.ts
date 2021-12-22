import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}
  rotated = true;

  rotate(): void {
    let h = document.getElementById('hamburger');
    if (this.rotated) {
      h!.style.transform = 'rotate(90deg)';
      this.rotated = false;
    } else {
      h!.style.transform = 'rotate(180deg)';
      this.rotated = true;
    }
  }

  getLocalData() {
    if (localStorage.getItem('userId') == null) {
      return false;
    } else {
      return true;
    }
  }
  deleteLocalData() {
    this.openDialog();
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: 'asd' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popUp/popUp.html',
  styleUrls: ['./popUp/popUp.sass'],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
    this.dialogRef.close();
  }
}
