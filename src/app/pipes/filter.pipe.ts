import { Pipe, PipeTransform } from "@angular/core";
import { Iplayer } from "../models/players";

@Pipe({
    name:'filterPlayer'
})
export class FilterPipe implements PipeTransform{
    transform(value: Iplayer[],searchValue:string):Iplayer[] {
    if(searchValue){
        let filterArr=value.filter(p=>{
            return p.country.toLowerCase().includes(searchValue.toLowerCase())
        })
        return filterArr
        
    }    
    return value
    }
    

}