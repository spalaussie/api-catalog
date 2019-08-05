// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { get } from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): object {
    return {
      name: 'Sandeep',
      sex: 'male',
      address: '4 Sturdee st',
      phone: '0403622972'
    }
  }
  constructor() { }
}
