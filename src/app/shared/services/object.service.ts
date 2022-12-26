import { OBJECTMOCK } from 'src/app/shared/mock/objects.mock';
export class ObjectsService {

  public getAllObjects(): any {
    return OBJECTMOCK;
  }

  public getObject(id: any): any {
    return OBJECTMOCK.find(p => p.id === parseInt(id, 0));
  }
}
