<?php

namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class DistributorType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', 'text', array(
        		'required' => true,
        		'label'    => 'Nombre'
        ))
        ->add('country', 'entity', array(
        		'required' => true,
    			'class' => 'Odiseo\Bundle\ConAgraBundle\Entity\Country',
    			'placeholder' => 'Choose an option',
        		'label'    => 'Pais'
        ))
        ;
    }

    public function getName()
    {
        return 'odiseo_conagra_distributor';
    }
}
