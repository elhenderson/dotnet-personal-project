import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { LineupEditComponent } from "../lineup/lineupEdit/lineupEdit.component";

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<LineupEditComponent> {
  canDeactivate(component: LineupEditComponent) {
    if (component.editForm.dirty && !component.editForm.submitted) {
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost!');
    }
    return true;
  }
}