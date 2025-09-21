/* Distancia en kilometros entre 2 coordenadas usando la formula de Haversine */
export function Haversine(lat1,lon1,lat2,lon2){
    const R=6371; /* radio de la tierra */

    /* utilizamos una formula para convertir los grados de las variables en radianes, ya que las funciones trigonometricas trabajan en radianes y no en grados */
    const toRAd=(deg)=>(deg*Math.PI) /180;

    /* esto mide cuanto se mueven los 2 puntos entre si */
    const dLat =toRAd(lat2-lat1);
    const dLon =toRAd(lon2-lon1);
    
    /*en este conjunto se representa la separacion angular entre los puntos */
    const a = Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(toRAd(lat1)) * Math.cos(toRAd(lat2))* Math.sin(dLon / 2) * Math.sin(dLon / 2);

    /*Esta es la formula del calculo del angulo central, el cual ya esta en radianes */
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    /* esto calcula la distancia final entre el angulo central y el radio de la tierra y la devuelve en kilometros */
    return R * c;
}