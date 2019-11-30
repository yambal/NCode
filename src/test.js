import test from 'ava'
import NCode from '../dist/index'

test('ava動作確認', t => {
  console.log(NCode.getNCode(35,135))
  t.pass()
})