const copyCard = () => {
	const card = document.querySelector(".card");
	const container = document.querySelector(".products_content")


	const view = `<div class="card" style="width: 176px;">
									<img class="card_img" src="../img/console_0${1}.jpg" alt="product">
										<div class="card_body">
										<h3 class="card_title">product xyv</h3>
										<p class="card_text">16,20 R$</p>
									</div><!--end card_body-->
								</div><!--end card-->`

container.append( view );
}


// copyCard()
