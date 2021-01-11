// ボタン要素
const button = document.getElementById('button')
// img要素取得
const imageArea = document.getElementById('imageArea')
// 結果表示箇所
const result = document.getElementById('result')

// 判定を行うためのパラメータ（0がア、1がゴ）
const judge = []

// 判定パラメータを生成（8種類）
for(i = 0; i < 2; i ++) {
  for (j = 0; j < 2; j ++) {
    for (k = 0; k < 2; k ++) {
      let num = ''
      num += i
      num += j
      num += k
      judge.push(num)
    }
  }
}

// ボタン押下時のイベント
button.onclick = () => {
  // ボタンを非活性に
  button.disabled = true
  // 文字列
  let letter = ''
  // 0か1を追加
  for (i = 0; i < 3; i ++) {
    letter += Math.floor(Math.random()*2)
  }
  // 結果のテキスト
  let resultText = '結果：'

  // 結果テキストエリアの文言変更
  result.textContent = '抽選中'

  // 生成された数値を元に画像を表示する
  switch(letter) {
    case judge[0]:
      imageArea.src = 'https://i.imgur.com/s7PuCmx.png'
      resultText += 'アツアツのアハン'
      break
    case judge[1]:
      imageArea.src = 'https://i.imgur.com/zcOsbXV.png'
      resultText += 'アツゴツのアハン'
      break
    case judge[2]:
      imageArea.src = 'https://i.imgur.com/EeNVmqF.png'
      resultText += 'アツゴツのゴハン'
      break
    case judge[3]:
      imageArea.src = 'https://i.imgur.com/WGUYOfs.png'
      resultText += 'アツアツのゴハン'
      break
    case judge[4]:
      imageArea.src = 'https://i.imgur.com/iC3xMvL.png'
      resultText += 'ゴツアツのアハン'
      break
    case judge[5]:
      imageArea.src = 'https://i.imgur.com/s8SP5qW.png'
      resultText += 'ゴツゴツのアハン'
      break
    case judge[6]:
      imageArea.src = 'https://i.imgur.com/p7gyw8P.png'
      resultText += 'ゴツゴツのゴハン'
      break
    case judge[7]:
      imageArea.src = 'https://i.imgur.com/0qJZIuc.png'
      resultText += 'ゴツアツのゴハン'
      break
    default:
      // 基本的にはここにくることはないはずなので、特に気にしない
      console.log('ERROR')
  }

  // 画像表示まで時間がかかるため、一時ボタンを使用不可にして結果表示を待たせる
  // 実際に使うときには不要な機能かも、削除めんどいから消さないが
  window.setTimeout(() => {
    // 結果のテキストを表示
    result.textContent = resultText
    // ボタンを活性に
    button.disabled = false
  }, 1000)
}