<?php 

namespace App\Controller;

use ApiPlatform\Metadata\ApiResource;
use App\Entity\Product;
use App\Service\SessionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[ApiResource()]
final class SessionController extends AbstractController{
    public function __construct(private readonly SessionService $sessionService)
    {
    }

    #[Route("session/shopping-cart", name:"session_get_shopping_cart", methods: ["GET"])]
    public function getShoppingCart(): Response
    {
        return $this->json($this->sessionService->getShoppingCart());
    }

    #[Route("session/shopping-cart/{id}", name:"session_add_to_shopping_cart", methods:['GET'])]
    public function addToShoppingCart(?Product $product, RequestStack $requestStack): ?Response
    {
        if($product){
            
            $this->sessionService->addToShoppingCart($product);
            
        }
        dd($requestStack->getSession());

        return $this->json($this->sessionService->getShoppingCart());
    }

    #[Route("session/shopping-cart/{id}", name:"session_remove_from_shopping_cart", methods:['DELETE'])]
    public function removeFromShoppingCart(?Product $product): ?Response
    {
        if($product){

            $this->sessionService->removeFromShoppingCart($product);
            return $this->json($this->sessionService->getShoppingCart());

        }
        return $this->json([]);
    }

}
