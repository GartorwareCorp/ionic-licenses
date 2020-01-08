import { Injectable } from '@angular/core';

const licenses = {
  "ODbL": 'This {DATA(BASE)-NAME} is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/',
  "Apache license 2.0": 'Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\You may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
  "MIT": 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
  "Creative Commons Attribution 3.0": 'You are free to:\n\n    Share — copy and redistribute the material in any medium or format\n    Adapt — remix, transform, and build upon the material for any purpose, even commercially.\n    The licensor cannot revoke these freedoms as long as you follow the license terms.\n\nUnder the following terms:\n\n    Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.\n\n    No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.\n\nNotices:\n\n    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.\n    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.',
  "Creative Commons Attribution Share Alike 3.0": 'You are free to:\n\n    Share — copy and redistribute the material in any medium or format\n    Adapt — remix, transform, and build upon the material for any purpose, even commercially.\n    The licensor cannot revoke these freedoms as long as you follow the license terms.\n\nUnder the following terms:\n\n    Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.\n    ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.\n\n    No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.\n\nNotices:\n\n    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.\n    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.'
};

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

  data: any = {};
  constructor() {
    this.data = licenses;
  }

  get(key) {
    return this.data[key];
  }


}
