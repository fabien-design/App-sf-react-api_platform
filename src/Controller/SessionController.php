<?php 

namespace App\Controller;

use App\Entity\Product;
use App\Service\SessionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class SessionController extends AbstractController{
    public function __construct(private readonly SessionService $sessionService)
    {
    }

    #[Route("session/shoppingCart", name:"session_get_shopping_cart")]
    public function getShoppingCart(): Response
    {
        return $this->json($this->sessionService->getShoppingCart());
    }

    #[Route("session/shoppingCart/{id}", name:"session_add_to_shopping_cart", methods:['POST'])]
    public function addToShoppingCart(Product $product): Response
    {
        $this->sessionService->addToShoppingCart($product);
        return $this->json($this->sessionService->getShoppingCart());
    }


}