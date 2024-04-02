<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ProductController extends AbstractController
{
    #[Route(path: '/api/products', name: 'api_get_products', methods:['GET'])]
    public function getProducts(ProductRepository $productRepository, NormalizerInterface $normalizer)
    {
        $products = $productRepository->findAll();
        
        $serializedProducts = $normalizer->normalize($products, 'json', [
            'groups' => 'product.read'
        ]);
        dd($serializedProducts[0]);
        return $this->json($serializedProducts);
    }
}
