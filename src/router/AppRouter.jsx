import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddNumbers, GetAgeComponent, NavbarComponent, OldestYoungestComponent } from '../components'
import { HomePage, TemplatePage } from '../pages'
import { getLength, cutOff, numerosRomanos, splitText, applyDiscount, binary, getVocals, palindrome, substractSpaces, initials, countWords, capitalizeFirst, reverse, noteScale, addNumbers, oldestAndYoungest, primos, cifras, juegoPiedraPapelTijera, timerMessage } from '../assets/js'

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path='/text-length' element={ <TemplatePage title={'Text Length'} fields={[{name: 'text', isNumber: false,}]} func={getLength} /> } />
          <Route exact path='/cut-off' element={ <TemplatePage title={'Cut Off'} fields={[{name: 'text', isNumber: false}, {name: 'cutoffPoint', isNumber: true}]} func={cutOff} /> } />
          <Route exact path='/split-text' element={ <TemplatePage title={'Split Text'} fields={[{name: 'text', isNumber: false}, {name: 'splitter', isNumber: false}]} func={splitText} /> } />
          <Route exact path='/apply-discount' element={ <TemplatePage title={'Apply Discount'} fields={[{name: 'Oriinal Price', isNumber: true}, {name: 'Discount %', isNumber: true}]} func={applyDiscount} /> } />
          <Route exact path='/get-age' element={ <GetAgeComponent /> } />
          <Route exact path='/roman-numbers' element={ <TemplatePage title={'Roman Numbers'} fields={[{name: 'decimal', isNumber: true,}]} func={numerosRomanos} /> } />
          <Route exact path='/binary' element={ <TemplatePage title={'Binary'} fields={[{name: 'Decimal numbner', isNumber: true}]} func={ binary } /> } />
          <Route exact path='/get-vocals' element={ <TemplatePage title={'Get Vocals'} fields={[{name: 'Original Text', isNumber: false}]} func={ getVocals } /> } />
          <Route exact path="/palindrome" element={<TemplatePage title={'Palindrome'} fields={[{name: 'Text', isNumber: false}]} func={ palindrome } />} />
          <Route exact path="/substract-spaces" element={<TemplatePage title={'Substract Spaces'} fields={[{name: 'Text', isNumber: false}]} func={ substractSpaces } />} />
          <Route exact path='/initials' element={ <TemplatePage title={'Initials'} fields={[{name: 'Text', isNumber: false}]} func={ initials } /> } />
          <Route exact path='/count-words' element={ <TemplatePage title={'Count Words'} fields={[{name: 'Text', isNumber: false}]} func={ countWords } /> } />
          <Route exact path='/capitalize-first-letter' element={ <TemplatePage title={'Capitalize First'} fields={[{name: 'Text', isNumber: false}]} func={ capitalizeFirst } /> } />
          <Route exact path='/reverse-string' element={ <TemplatePage title={'Reverse'} fields={[{name: 'Text', isNumber: false}]} func={ reverse } /> } />
          <Route exact path='/add-numbers' element={ <AddNumbers /> } />
          <Route exact path='/oldest-and-youngest' element={ <OldestYoungestComponent /> } />
          <Route exact path='/notes-ranking' element={ <TemplatePage title={'Note Scale'} fields={[{name: 'Note', isNumber: true}]} func={ noteScale } /> } />
          <Route exact path='/figures' element={ <TemplatePage title={'Figures'} fields={[{name: 'Number', isNumber: true}]} func={ cifras } /> } />
          <Route exact path='/prime-numbers' element={ <TemplatePage title={'Primer Numbers'} fields={[{name: 'Quantity of prime numbers', isNumber: true}]} func={ primos } /> } />
          <Route exact path='/rock-paper-scissors' element={ <TemplatePage title={'Rock, Paper or Scissors'} fields={[{name: 'Player 1', isNumber: false}, {name: 'Player 2', isNumber: false}]} func={ juegoPiedraPapelTijera } /> } />
          <Route exact path='/timer-message' element={ <TemplatePage title={'Timer Message'} fields={[{name: 'Message', isNumber: false}, {name: 'Time', isNumber: true}, {name: 'Repetitions', isNumber: true}]} func={ timerMessage } /> } />
        </Routes>
      </Router>
    </div>
  )
}
