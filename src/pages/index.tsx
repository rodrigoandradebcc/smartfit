import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hourIcon from '../../public/images/icon-hour.png'
import logoImg from '../../public/images/logo.svg'
import Card from '../components/Card'
import InfoCard from '../components/InfoCard'
import Message from '../components/Message'
import RadioBox from '../components/RadioBox'
import api from '../services/api'
import * as S from '../styles/home/styles'

interface Schedules {
  weekdays: string;
  hour: string;
}

export interface Gym {
    id: string;
    content: string;
    fountain: string;
    locker_room: string;
    mask: string;
    opened: boolean;
    schedules: Schedules[];
    title: string;
    towel: string;
    street?: string;
    region?: string;
    city_name?: string;
    state_name?: string;
    uf?: string;
}

export default function Home() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [filteredGyms, setFilteredGyms] = useState<Gym[]>([]);
  const [closedUnits, setClosedUnits] = useState(false);
  const [period, setPeriod] = useState('');
  const [clear, setClear] = useState(false);
  const [error, setError] = useState(false);

  function clearGyms(){
    setClear(true);
    setFilteredGyms([])
    setPeriod('')
    setClosedUnits(false)
  }

  function validateLimitHour(hour: string, open: number, close: number) {
    const hours = hour.match(/\d/g);
    if(hours?.length === 4) {
         return Number(`${hours[0]}${hours[1]}`) >= open || Number(`${hours[2]}${hours[3]}`) < close;
    }

    if(hours?.length === 8) {
        return Number(`${hours[0]}${hours[1]}`) >= open && Number(`${hours[2]}${hours[3]}`) <= 30 || Number(`${hours[4]}${hours[5]}`) <= close && Number(`${hours[6]}${hours[7]}`) <= 30;
    }
}
     

  function filterGyms(close: boolean, period: string) {
    
      const filtered = gyms.filter((gym: Gym) => {
        // if(!gym.schedules){ 
        //   return gym.opened === false || gym.opened === undefined
        // }

        if(closedUnits === false && gym.opened){
          if(period === 'Manhã 06:00 às 12:00'){
            console.log(validateLimitHour(gym.schedules[0].hour, 6, 12) || validateLimitHour(gym.schedules[1].hour, 6, 12) || validateLimitHour(gym.schedules[2].hour, 6, 12))       
            return validateLimitHour(gym.schedules[0].hour, 6, 12) || validateLimitHour(gym.schedules[1].hour, 6, 12) || validateLimitHour(gym.schedules[2].hour, 6, 12) 
          }
          
          if(period === 'Tarde 12:01 às 18:00' && gym.opened) {   
            return validateLimitHour(gym.schedules[0].hour, 12, 18) || validateLimitHour(gym.schedules[1].hour, 12, 18) || validateLimitHour(gym.schedules[2].hour, 12, 18)
          }

          if(period === 'Noite 18:01 às 23:00' && gym.opened) {
            return validateLimitHour(gym.schedules[0].hour, 18, 23) || validateLimitHour(gym.schedules[1].hour, 18, 23) || validateLimitHour(gym.schedules[2].hour, 18, 23)
          }
        }

        if(closedUnits){
          // return gym.opened === false || gym.opened === undefined

          if(period === 'Manhã 06:00 às 12:00' || gym.opened){
            console.log(validateLimitHour(gym.schedules[0].hour, 6, 12) || validateLimitHour(gym.schedules[1].hour, 6, 12) || validateLimitHour(gym.schedules[2].hour, 6, 12))       
            return validateLimitHour(gym.schedules[0].hour, 6, 12) || validateLimitHour(gym.schedules[1].hour, 6, 12) || validateLimitHour(gym.schedules[2].hour, 6, 12) 
          }
          
          if(period === 'Tarde 12:01 às 18:00') {   
            return validateLimitHour(gym.schedules[0].hour, 12, 18) || validateLimitHour(gym.schedules[1].hour, 12, 18) || validateLimitHour(gym.schedules[2].hour, 12, 18)
          }

          if(period === 'Noite 18:01 às 23:00') {
            return validateLimitHour(gym.schedules[0].hour, 18, 23) || validateLimitHour(gym.schedules[1].hour, 18, 23) || validateLimitHour(gym.schedules[2].hour, 18, 23)
          }
        }
                
      })

      setFilteredGyms(filtered) 
     
    // else {
    //   const filtered = gyms.filter(gym => gym.opened === false || gym.opened === undefined)
    //   setFilteredGyms(filtered)
    // }    
  }

  useEffect(() => {
      try {
        api.get('/locations.json')
          .then(response => {
            setGyms(response.data.locations);
          }) 
      } catch (error) {
        console.log('error',error);
      }
    },
    [],
  )

  return (
    <div>
      <Head>
        <title>Smart Fit</title>
      </Head>

      <main>
        <S.Navbar>
          <Image src={logoImg} alt="Smart fit" width={188} height={70}/>
        </S.Navbar>

        {error && (
            <Message message='Nenhuma unidade encontrada' setError={setError}/>
        )}

        <S.Content>
          

          <h1>REABERTURA SMART FIT</h1>

          <S.Line/>

          <S.InfoText>
            O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. 
            Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
          </S.InfoText>

          <S.ConfigurationCard>
            <S.TitleConfigurationCard>
              <Image src={hourIcon} alt="hour" width={30} height={30}/>

              <p>Horário</p>
            </S.TitleConfigurationCard>

            <h2>Qual período quer treinar?</h2>

            <S.SeparatorLine />

            <RadioBox setPeriod={setPeriod} period={period}/>
            
            <S.CheckAndResultContainer>
              <S.CheckArea>
                <input type="checkbox" id="closed" name="closed" checked={closedUnits} onChange={(event) => {setClosedUnits(event.target.checked)}}/>
                <p>Exibir unidades fechadas</p>
              </S.CheckArea>

              <S.ResultsFound>
                <p>Resultados encontrados: <em>{filteredGyms.length > 0 ? filteredGyms.length : 0}</em></p>
              </S.ResultsFound>
            </S.CheckAndResultContainer>

            <S.ActionArea>
              <S.Button onClick={() => {
                if(period !== ''){
                  filterGyms(closedUnits,period);
                  setClear(false);
                }else{
                  setError(true)
                }
              }}>
                Encontrar unidade
              </S.Button>

              <S.Button outlined onClick={() => {clearGyms()}}>
                Limpar
              </S.Button>
            </S.ActionArea>
            
          </S.ConfigurationCard>
          
          <InfoCard/>

          <S.GridLayout>
              
                {gyms && clear && gyms.map((gym, index) => {
                  return (
                    <div key={index}>
                      <Card key={index} gym={gym} />
                    </div>
                  )
                })}

                {filteredGyms && filteredGyms.map((gym, index) => {
                  return (
                    <div key={index}>
                      <Card key={index} gym={gym} />
                    </div>
                  )
                })}              
              
          </S.GridLayout>
        </S.Content>
      </main>

      <S.Footer>
        <Image src={logoImg} alt="Smart fit"/>
        <p>Todos os direitos reservados - 2020</p>
      </S.Footer>
    </div>
  )
}
