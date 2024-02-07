function ExchangeForm() {
  return (
    <form>
      <label for="name">Nom</label>
      <input type="text" name="name" />
      <label for="step">Étape</label>
      <select name="step">
        <option value="firstExchange">1er échange</option>
        <option value="relaunch">Relance</option>
        <option value="interview">Entretient</option>
        <option value="accepted">Accepté</option>
        <option value="reject">Refusé</option>
      </select>

      <button type="submit">Enregistrer</button>
    </form>
  )
}

export default ExchangeForm
