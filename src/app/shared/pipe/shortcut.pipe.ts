import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})

export class ShortcutPipe implements PipeTransform {
  transform(value: string, limit = 20): string {
    return value.length > limit ? value.substr(0, limit) + '...' : value
  }
}

// {{message | shortcut}} // cắt 20 kí tự
// {{message | shortcut: 50}} // cắt 50 kí tự
