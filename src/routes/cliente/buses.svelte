<script>
    function check() {
        document.getElementById("my-modal").checked = true;
    }

    function uncheck() {
        document.getElementById("my-modal").checked = false;
    }
</script>


<!-- The button to open modal -->
<label for="my-modal" class="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label on:click={() => uncheck() } class="btn">Yay!</label>
    </div>
  </div>
</div>